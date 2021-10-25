package com.springboot.meli.SpringBootMeli.entity.DatosItems;

import com.springboot.meli.SpringBootMeli.entity.DatosBusqueda.Author;

public class DatosItems {
	public Author author;
    public Item item;
    
    public DatosItems() {}
    
	public Author getAuthor() {
		return author;
	}
	public void setAuthor(Author author) {
		this.author = author;
	}
	public Item getItem() {
		return item;
	}
	public void setItem(Item item) {
		this.item = item;
	}
       
}
