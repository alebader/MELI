package com.springboot.meli.SpringBootMeli.entity.Category;

import java.util.Date;
import java.util.List;

public class Category {
	 public String id;
	    public String name;
	    public String picture;
	    public Object permalink;
	    public int total_items_in_this_category;
	    public List<PathFromRoot> path_from_root;
	    public List<Object> children_categories;
	    public String attribute_types;
	    public Settings settings;
	    public List<ChannelsSetting> channels_settings;
	    public Object meta_categ_id;
	    public boolean attributable;
	    public Date date_created;
}
