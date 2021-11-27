package com.springboot.meli.SpringBootMeli.service;

import org.springframework.web.client.RestTemplate;

import com.springboot.meli.SpringBootMeli.entity.Items.Items;
import com.springboot.meli.SpringBootMeli.entity.ItemsDescription.ItemsDescription;

public class ItemsService {

	public Items obtenerProducto(String id) {
		Items result = new Items();
		try {
		  	 final String uri = "https://api.mercadolibre.com/items/" + id;
		     RestTemplate restTemplate = new RestTemplate();
		     result = restTemplate.getForObject(uri, Items.class);
		} catch(Exception ex) {
	    	System.out.println("Error al obtener productos"); 
	     }
		     return result;
	}
	
	public ItemsDescription obtenerProductoDescripcion(String id) {
		ItemsDescription result = new ItemsDescription();		
		try 
		{
			final String uri = "https://api.mercadolibre.com/items/" + id + "/description";
			RestTemplate restTemplate = new RestTemplate();
	     
			result = restTemplate.getForObject(uri, ItemsDescription.class);
		} catch(Exception ex) {
			System.out.println("Error al obtener descripcion productos"); 
		}
	     return result;		
	}
}
