package com.springboot.meli.SpringBootMeli.entity.Search;

import java.util.Date;
import java.util.List;

public class Prices{
    public String id;
    public String type;
    public int amount;
    public Object regular_amount;
    public String currency_id;
    public Date last_updated;
    public Conditions conditions;
    public String exchange_rate_context;
    public Metadata metadata;
    public Presentation presentation;
    public List<Object> payment_method_prices;
    public List<Object> reference_prices;
    public List<Object> purchase_discounts;
}