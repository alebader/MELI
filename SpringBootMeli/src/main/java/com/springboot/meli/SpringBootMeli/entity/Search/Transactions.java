package com.springboot.meli.SpringBootMeli.entity.Search;

public class Transactions {
	 public int canceled;
	    public String period;
	    public int total;
	    public Ratings ratings;
	    public int completed;

	public class Ratings{
	    public double negative;
	    public double neutral;
	    public double positive;
	}
}
