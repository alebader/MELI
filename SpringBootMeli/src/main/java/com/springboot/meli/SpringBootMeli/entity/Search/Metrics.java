package com.springboot.meli.SpringBootMeli.entity.Search;

public class Metrics {
    public Cancellations cancellations;
    public Claims claims;
    public DelayedHandlingTime delayed_handling_time;
    public Sales sales;
    
	public class Cancellations{
	    public String period;
	    public double rate;
	    public int value;
	}

	public class Claims{
	    public String period;
	    public double rate;
	    public int value;
	}

	public class DelayedHandlingTime{
	    public String period;
	    public double rate;
	    public int value;
	}

	public class Sales{
	    public String period;
	    public int completed;
	}
}
