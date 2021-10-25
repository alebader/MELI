package com.springboot.meli.SpringBootMeli.entity.DatosItems;

public class Item {

    public String id;
    public String title;
    public Price price;
    public String picture;
    public String condition;
    public boolean free_shipping;
    public int sold_quantity;
    public String description;
    
    public Item() {}
    
	public Item(String id, String title, Price price, String picture, String condition, boolean free_shipping,
			int sold_quantity, String description) {
		super();
		this.id = id;
		this.title = title;
		this.price = price;
		this.picture = picture;
		this.condition = condition;
		this.free_shipping = free_shipping;
		this.sold_quantity = sold_quantity;
		this.description = description;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Price getPrice() {
		return price;
	}
	public void setPrice(Price price) {
		this.price = price;
	}
	public String getPicture() {
		return picture;
	}
	public void setPicture(String picture) {
		this.picture = picture;
	}
	public String getCondition() {
		return condition;
	}
	public void setCondition(String condition) {
		this.condition = condition;
	}
	public boolean isFree_shipping() {
		return free_shipping;
	}
	public void setFree_shipping(boolean free_shipping) {
		this.free_shipping = free_shipping;
	}
	public int getSold_quantity() {
		return sold_quantity;
	}
	public void setSold_quantity(int sold_quantity) {
		this.sold_quantity = sold_quantity;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
    
    
	
}
