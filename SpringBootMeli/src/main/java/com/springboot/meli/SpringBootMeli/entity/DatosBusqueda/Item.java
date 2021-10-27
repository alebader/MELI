package com.springboot.meli.SpringBootMeli.entity.DatosBusqueda;

public class Item {
	 public String id;
	    public String title;
	    public Price price;
	    public String picture;
	    public String condition;
	    public boolean free_shipping;
	    
	    public Item() {}
	    
		public Item(String id, String title, Price price, String picture, String condition, boolean free_shipping) {
			super();
			this.id = id;
			this.title = title;
			this.price = price;
			this.picture = picture;
			this.condition = condition;
			this.free_shipping = free_shipping;
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
	    
	    
}
