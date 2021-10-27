package com.springboot.meli.SpringBootMeli.controller;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.meli.SpringBootMeli.entity.DatosBusqueda.Author;
import com.springboot.meli.SpringBootMeli.entity.DatosItems.DatosItems;
import com.springboot.meli.SpringBootMeli.entity.DatosItems.Item;
import com.springboot.meli.SpringBootMeli.entity.DatosItems.Price;
import com.springboot.meli.SpringBootMeli.entity.Items.Items;
import com.springboot.meli.SpringBootMeli.entity.Items.Picture;
import com.springboot.meli.SpringBootMeli.entity.Users.User;
import com.springboot.meli.SpringBootMeli.service.ItemsService;
import com.springboot.meli.SpringBootMeli.service.UserService;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class ItemsController {
	ItemsService servicio = new ItemsService();
	UserService servicioUser = new UserService();
	DatosItems datos = new DatosItems();
	
	@GetMapping("/api/items/{id}")
	public DatosItems obtenerProducto(@PathVariable String id) {		
		Items itemsResponse = servicio.obtenerProducto(id);				
		return mapearDatos(itemsResponse);
	}
	
	
	private DatosItems mapearDatos(Items itemsResponse) {
		
		String descripcion = (servicio.obtenerProductoDescripcion(itemsResponse.id)).plain_text; 
		User autor = servicioUser.obtenerDatosUsuario(itemsResponse.seller_id);
		
		datos.setAuthor(new Author(autor.getNickname(), autor.getNickname()));
		datos.setItem(new Item(itemsResponse.id, itemsResponse.title, obtenerPrice(itemsResponse.currency_id, itemsResponse.price), 
				obtenerPicture(itemsResponse.pictures), itemsResponse.condition, itemsResponse.shipping.free_shipping, 
				itemsResponse.sold_quantity, descripcion));
		
		return datos;
	}
	
	private String obtenerPicture(List<Picture> pictures) {		
		return pictures.get(0).url;
	}

	private Price obtenerPrice(String currency, double amount) {
		long valorEntero = (long) amount;
		double valorDecimal = amount - valorEntero;		
		return new Price(currency, valorEntero, (int)valorDecimal);
	}
}


