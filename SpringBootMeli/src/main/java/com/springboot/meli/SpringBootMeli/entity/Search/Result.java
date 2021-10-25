package com.springboot.meli.SpringBootMeli.entity.Search;

import java.util.Date;
import java.util.List;

public class Result{
    public String id;
    public String site_id;
    public String title;
    public Seller seller;
    public int price;
    public Price prices;
    public Object sale_price;
    public String currency_id;
    public int available_quantity;
    public int sold_quantity;
    public String buying_mode;
    public String listing_type_id;
    public Date stop_time;
    public String condition;
    public String permalink;
    public String thumbnail;
    public String thumbnail_id;
    public boolean accepts_mercadopago;
    public Installments installments;
    public Address address;
    public Shipping shipping;
    public SellerAddress seller_address;
    public List<Attribute> attributes;
    public Object original_price;
    public String category_id;
    public Object official_store_id;
    public String domain_id;
    public Object catalog_product_id;
    public List<String> tags;
    public int order_backend;
    public boolean use_thumbnail_id;
    public Object offer_score;
    public Object offer_share;
    public Object match_score;
    public Object winner_item_id;
}