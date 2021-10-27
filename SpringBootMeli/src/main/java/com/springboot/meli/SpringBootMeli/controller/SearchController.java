package com.springboot.meli.SpringBootMeli.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.meli.SpringBootMeli.entity.DatosBusqueda.Author;
import com.springboot.meli.SpringBootMeli.entity.DatosBusqueda.DatosBusqueda;
import com.springboot.meli.SpringBootMeli.entity.DatosBusqueda.Item;
import com.springboot.meli.SpringBootMeli.entity.DatosBusqueda.Price;
import com.springboot.meli.SpringBootMeli.entity.Search.Prices;
import com.springboot.meli.SpringBootMeli.entity.Search.Result;
import com.springboot.meli.SpringBootMeli.entity.Search.Search;
import com.springboot.meli.SpringBootMeli.entity.Users.User;
import com.springboot.meli.SpringBootMeli.service.SearchService;
import com.springboot.meli.SpringBootMeli.service.UserService;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class SearchController {
	UserService servicioUser = new UserService();
	
	@RequestMapping("/api/items")
	public DatosBusqueda obtenerProductos(@RequestParam String search) {
		SearchService servicio = new SearchService();
		Search searchResponse =  servicio.obtenerDatosBusqueda(search);

		return mapearDatos(searchResponse);
	}	
	
	private DatosBusqueda mapearDatos(Search searchResponse) {
		DatosBusqueda datos = new DatosBusqueda();
		List<Item> listaItem = new ArrayList<Item>();
		User autor = servicioUser.obtenerDatosUsuario(searchResponse.results.get(0).seller.id);		
		datos.setAuthor(new Author(autor.getNickname(), autor.getNickname()));
		
		for(Result r : searchResponse.results) {
			Price p = obtenerPrice(r);
			Item i = new Item(r.id, r.title, p, r.thumbnail, r.condition,r.shipping.free_shipping);
			listaItem.add(i);
		}
		
		datos.setItems(listaItem);
		
		return datos;
				
	}
	
	private Price obtenerPrice(Result r) {
		Price pr;
		double monto = r.price;
		double montoSeleccionado = monto;		
		String currency = "";
		for(Prices p : r.prices.prices) {
			if(p.amount == monto) {
				montoSeleccionado = p.amount;
				currency = p.currency_id;
				break;
			}
		}
		long valorEntero = (long) montoSeleccionado;
		double valorDecimal = montoSeleccionado - valorEntero;		
		pr = new Price(currency, valorEntero,(int)valorDecimal);
		return pr;
	}
}
