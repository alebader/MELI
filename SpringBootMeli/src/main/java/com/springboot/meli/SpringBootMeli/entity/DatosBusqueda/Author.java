package com.springboot.meli.SpringBootMeli.entity.DatosBusqueda;

public class Author {
 	public String name;
    public String lastname;
	
    public Author() {}
    
    public Author(String name, String lastname) {
		super();
		this.name = name;
		this.lastname = lastname;
	}
    
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}	    	   
}
