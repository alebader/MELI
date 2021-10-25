package com.springboot.meli.SpringBootMeli.entity.Items;

import java.util.List;

public class Variation{
    public long id;
    public int price;
    public List<AttributeCombination> attribute_combinations;
    public int available_quantity;
    public int sold_quantity;
    public List<Object> sale_terms;
    public List<String> picture_ids;
    public Object catalog_product_id;
}