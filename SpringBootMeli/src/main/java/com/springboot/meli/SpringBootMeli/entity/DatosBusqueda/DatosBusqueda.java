package com.springboot.meli.SpringBootMeli.entity.DatosBusqueda;

import java.util.List;

public class DatosBusqueda {
 	public Author author;
    public List<String> categories;
    public List<Item> items;
	
    public DatosBusqueda() {}
    
    public DatosBusqueda(Author author, List<String> categories, List<Item> items) {
		super();
		this.author = author;
		this.categories = categories;
		this.items = items;
	}
	public Author getAuthor() {
		return author;
	}
	public void setAuthor(Author author) {
		this.author = author;
	}
	public List<String> getCategories() {
		return categories;
	}
	public void setCategories(List<String> categories) {
		this.categories = categories;
	}
	public List<Item> getItems() {
		return items;
	}
	public void setItems(List<Item> items) {
		this.items = items;
	}
    
    
}
