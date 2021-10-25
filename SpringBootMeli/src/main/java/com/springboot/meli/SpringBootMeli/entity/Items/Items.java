package com.springboot.meli.SpringBootMeli.entity.Items;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class Items {

	public String id;
    public String site_id;
    public String title;
    public Object subtitle;
    public int seller_id;
    public String category_id;
    public Object official_store_id;
    public double price;
    public double base_price;
    public Object original_price;
    public String currency_id;
    public int initial_quantity;
    public int available_quantity;
    public int sold_quantity;
    public List<SaleTerm> sale_terms;
    public String buying_mode;
    public String listing_type_id;
    public Date start_time;
    public Date stop_time;
    public String condition;
    public String permalink;
    public String thumbnail_id;
    public String thumbnail;
    public String secure_thumbnail;
    public List<Picture> pictures;
    public Object video_id;
    public List<Description> descriptions;
    public boolean accepts_mercadopago;
    public List<Object> non_mercado_pago_payment_methods;
    public Shipping shipping;
    public String international_delivery_mode;
    public SellerAddress seller_address;
    public Object seller_contact;
    @JsonIgnore
    public Location location;
    public List<Object> coverage_areas;
    public List<Attribute> attributes;
    public List<Object> warnings;
    public String listing_source;
    public List<Variation> variations;
    public String status;
    public List<Object> sub_status;
    public List<String> tags;
    public String warranty;
    public Object catalog_product_id;
    public String domain_id;
    public Object parent_item_id;
    public Object differential_pricing;
    public List<String> deal_ids;
    public boolean automatic_relist;
    public Date date_created;
    public Date last_updated;
    public double health;
    public boolean catalog_listing;
    public List<String> channels;

}
