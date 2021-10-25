package com.springboot.meli.SpringBootMeli.entity.Items;

import java.util.List;

public class Shipping{
    public String mode;
    public List<FreeMethod> free_methods;
    public List<String> tags;
    public Object dimensions;
    public boolean local_pick_up;
    public boolean free_shipping;
    public String logistic_type;
    public boolean store_pick_up;
}