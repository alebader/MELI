package com.springboot.meli.SpringBootMeli.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.meli.SpringBootMeli.entity.DatosBusqueda.DatosBusqueda;
import com.springboot.meli.SpringBootMeli.entity.Search.Search;
import com.springboot.meli.SpringBootMeli.service.SearchService;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class SearchController {
	
	@RequestMapping("/api/items")
	public Search obtenerProductos(@RequestParam String search) {
		SearchService servicio = new SearchService();
		Search searchResponse =  servicio.obtenerDatosBusqueda(search);
		
		
		
		return servicio.obtenerDatosBusqueda(search);
	}	
	
	private DatosBusqueda mapearDatos(Search searchResponse) {
		DatosBusqueda datos = new DatosBusqueda();
		
		
		
		return datos;
	}
}
