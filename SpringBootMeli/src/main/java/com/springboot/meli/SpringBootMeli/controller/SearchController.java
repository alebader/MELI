package com.springboot.meli.SpringBootMeli.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

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
import com.springboot.meli.SpringBootMeli.service.CategoryService;
import com.springboot.meli.SpringBootMeli.service.SearchService;
import com.springboot.meli.SpringBootMeli.service.UserService;
import com.springboot.meli.SpringBootMeli.entity.Category.Category;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class SearchController {
	UserService servicioUser = new UserService();
	
	@RequestMapping("/api/productos")
	public DatosBusqueda obtenerProductos(@RequestParam String search) {
		SearchService servicio = new SearchService();
		Search searchResponse =  servicio.obtenerDatosBusqueda(search);

		return mapearDatos(searchResponse);
	}	
	
	private DatosBusqueda mapearDatos(Search searchResponse) {
		DatosBusqueda datos = new DatosBusqueda();
		List<Item> listaItem = new ArrayList<Item>();
		List<String> categoriasId = new ArrayList<String>();
		List<String> categorias = new ArrayList<String>();
		
		try {
		
			User autor = servicioUser.obtenerDatosUsuario(searchResponse.results.get(0).seller.id);		
			datos.setAuthor(new Author(autor.getNickname(), autor.getNickname()));
		
			for(Result r : searchResponse.results) {
				Price p = obtenerPrice(r);
				Item i = new Item(r.id, r.title, p, r.thumbnail, r.condition,r.shipping.free_shipping);
				listaItem.add(i);
				categoriasId.add(r.category_id);
			}
			
			//obtengo los id unicos de categoria
			Set<String> temp = new LinkedHashSet<String>(categoriasId);
			String[] categoriasTemp = temp.toArray( new String[temp.size()] );
			
			for(String c : categoriasTemp) {
				categorias.add(obtenerCategoria(c));
			}
			
			datos.setCategories(categorias);
			datos.setItems(listaItem);
		
		} catch (Exception ex) {
			System.out.println("Error al mapear los datos. Error: " +  ex.getMessage());
		}
		return datos;
				
	}
	
	private Price obtenerPrice(Result r) {
		Price pr = null;
		double monto = r.price;
		double montoSeleccionado = monto;
		try {
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
		} catch (Exception ex) {
			System.out.println("Error al obtener datos de price. Error: " +  ex.getMessage());
		}
		return pr;
	}
	
	private String obtenerCategoria(String categoryId){	
		Category categoria = CategoryService.obtenerDatosUsuario(categoryId);
		
		return categoria.name;
	}
}
