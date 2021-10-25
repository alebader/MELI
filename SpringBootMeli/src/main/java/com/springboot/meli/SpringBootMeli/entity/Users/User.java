package com.springboot.meli.SpringBootMeli.entity.Users;

import java.util.Date;
import java.util.List;

public class User {
	 public int id;
	    public String nickname;
	    public Date registration_date;
	    public String country_id;
	    public Address address;
	    public String user_type;
	    public List<String> tags;
	    public Object logo;
	    public int points;
	    public String site_id;
	    public String permalink;
	    public SellerReputation seller_reputation;
	    public BuyerReputation buyer_reputation;
	    public Status status;
	    
	    public User() {}
	    
		public User(int id, String nickname, Date registration_date, String country_id, Address address,
				String user_type, List<String> tags, Object logo, int points, String site_id, String permalink,
				SellerReputation seller_reputation, BuyerReputation buyer_reputation, Status status) {
			super();
			this.id = id;
			this.nickname = nickname;
			this.registration_date = registration_date;
			this.country_id = country_id;
			this.address = address;
			this.user_type = user_type;
			this.tags = tags;
			this.logo = logo;
			this.points = points;
			this.site_id = site_id;
			this.permalink = permalink;
			this.seller_reputation = seller_reputation;
			this.buyer_reputation = buyer_reputation;
			this.status = status;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getNickname() {
			return nickname;
		}
		public void setNickname(String nickname) {
			this.nickname = nickname;
		}
		public Date getRegistration_date() {
			return registration_date;
		}
		public void setRegistration_date(Date registration_date) {
			this.registration_date = registration_date;
		}
		public String getCountry_id() {
			return country_id;
		}
		public void setCountry_id(String country_id) {
			this.country_id = country_id;
		}
		public Address getAddress() {
			return address;
		}
		public void setAddress(Address address) {
			this.address = address;
		}
		public String getUser_type() {
			return user_type;
		}
		public void setUser_type(String user_type) {
			this.user_type = user_type;
		}
		public List<String> getTags() {
			return tags;
		}
		public void setTags(List<String> tags) {
			this.tags = tags;
		}
		public Object getLogo() {
			return logo;
		}
		public void setLogo(Object logo) {
			this.logo = logo;
		}
		public int getPoints() {
			return points;
		}
		public void setPoints(int points) {
			this.points = points;
		}
		public String getSite_id() {
			return site_id;
		}
		public void setSite_id(String site_id) {
			this.site_id = site_id;
		}
		public String getPermalink() {
			return permalink;
		}
		public void setPermalink(String permalink) {
			this.permalink = permalink;
		}
		public SellerReputation getSeller_reputation() {
			return seller_reputation;
		}
		public void setSeller_reputation(SellerReputation seller_reputation) {
			this.seller_reputation = seller_reputation;
		}
		public BuyerReputation getBuyer_reputation() {
			return buyer_reputation;
		}
		public void setBuyer_reputation(BuyerReputation buyer_reputation) {
			this.buyer_reputation = buyer_reputation;
		}
		public Status getStatus() {
			return status;
		}
		public void setStatus(Status status) {
			this.status = status;
		}
	    
	    
}
