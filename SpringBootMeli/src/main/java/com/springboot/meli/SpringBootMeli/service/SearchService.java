package com.springboot.meli.SpringBootMeli.service;

import org.springframework.web.client.RestTemplate;

import com.springboot.meli.SpringBootMeli.entity.Search.Search;

public class SearchService {

	public Search obtenerDatosBusqueda(String query) {
		  	 final String uri = "https://api.mercadolibre.com/sites/MLA/search?q=:" + query + "&limit=4";
		     RestTemplate restTemplate = new RestTemplate();
		     Search result = restTemplate.getForObject(uri, Search.class);      		     
		     return result;
	}
}
