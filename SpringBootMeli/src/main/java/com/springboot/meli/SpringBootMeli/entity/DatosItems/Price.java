package com.springboot.meli.SpringBootMeli.entity.DatosItems;

public class Price {
	 	public String currency;
	    public double amount;
	    public int decimals;
	    
	    public Price() {}
	    
		public Price(String currency, double amount, int decimals) {
			super();
			this.currency = currency;
			this.amount = amount;
			this.decimals = decimals;
		}
		public String getCurrency() {
			return currency;
		}
		public void setCurrency(String currency) {
			this.currency = currency;
		}
		public double getAmount() {
			return amount;
		}
		public void setAmount(double amount) {
			this.amount = amount;
		}
		public int getDecimals() {
			return decimals;
		}
		public void setDecimals(int decimals) {
			this.decimals = decimals;
		}
	    
	    
}
