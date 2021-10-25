package com.springboot.meli.SpringBootMeli.service;

import org.springframework.web.client.RestTemplate;

import com.springboot.meli.SpringBootMeli.entity.Items.Items;
import com.springboot.meli.SpringBootMeli.entity.ItemsDescription.ItemsDescription;

public class ItemsService {

	public Items obtenerProducto(String id) {
		  	 final String uri = "https://api.mercadolibre.com/items/" + id;
		     RestTemplate restTemplate = new RestTemplate();
		     Items result = restTemplate.getForObject(uri, Items.class);      		     
		     return result;
	}
	
	public ItemsDescription obtenerProductoDescripcion(String id) {
	  	 final String uri = "https://api.mercadolibre.com/items/" + id + "/description";
	     RestTemplate restTemplate = new RestTemplate();
	     ItemsDescription result = restTemplate.getForObject(uri, ItemsDescription.class);      		     
	     return result;
}
}
