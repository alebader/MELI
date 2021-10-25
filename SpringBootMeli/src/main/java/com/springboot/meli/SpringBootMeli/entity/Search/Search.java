package com.springboot.meli.SpringBootMeli.entity.Search;

import java.util.List;

public class Search {
	
	public String site_id;
    public String country_default_time_zone;
    public String query;
    public Paging paging;
    public List<Result> results; 
    public Sort sort;
    public List<AvailableSort> available_sorts;
    public List<Object> filters;
    public List<AvailableFilter> available_filters;	

}