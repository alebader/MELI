package com.springboot.meli.SpringBootMeli.entity.Search;

import java.util.Date;
import java.util.List;

public class Seller{
    public int id;
    public String permalink;
    public Date registration_date;
    public boolean car_dealer;
    public boolean real_estate_agency;
    public List<String> tags;
    public Eshop eshop;
    public SellerReputation seller_reputation;
}