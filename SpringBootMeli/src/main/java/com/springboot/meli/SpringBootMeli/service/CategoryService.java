package com.springboot.meli.SpringBootMeli.service;

import org.springframework.web.client.RestTemplate;

import com.springboot.meli.SpringBootMeli.entity.Category.Category;

public class CategoryService {
	public static Category obtenerDatosUsuario(String categoryId) {
	  	 final String uri = "https://api.mercadolibre.com/categories/" + categoryId;
	     RestTemplate restTemplate = new RestTemplate();
	     Category result = restTemplate.getForObject(uri, Category.class);      		     
	     return result;
	}
}
