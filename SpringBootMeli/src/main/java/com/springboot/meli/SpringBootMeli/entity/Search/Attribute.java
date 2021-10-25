package com.springboot.meli.SpringBootMeli.entity.Search;

import java.util.List;

public class Attribute{
    public String id;
    public String name;
    public String value_name;
    public String attribute_group_name;
    public Object value_id;
    public ValueStruct value_struct;
    public List<Value> values;
    public String attribute_group_id;
    public long source;
}