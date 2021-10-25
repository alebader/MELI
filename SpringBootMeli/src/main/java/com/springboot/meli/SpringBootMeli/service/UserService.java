package com.springboot.meli.SpringBootMeli.service;

import org.springframework.web.client.RestTemplate;
import com.springboot.meli.SpringBootMeli.entity.Users.User;

public class UserService {

	public User obtenerDatosUsuario(int sellerId) {
		  	 final String uri = "https://api.mercadolibre.com/users/" + sellerId;
		     RestTemplate restTemplate = new RestTemplate();
		     User result = restTemplate.getForObject(uri, User.class);      		     
		     return result;
	}
}
