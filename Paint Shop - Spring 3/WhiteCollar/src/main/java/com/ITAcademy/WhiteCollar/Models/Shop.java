package com.ITAcademy.WhiteCollar.Models;


import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name="Shop")

public class Shop {

    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long shopId;
    private String shopName;
    private int quantityPaints;

    /* TESTING OneToMany */

    @OneToMany(mappedBy="shop")
    private Set<Paint> paints;

    /* TESTING OneToMany */

    public Shop(){}

    public Shop(String shopName){
        this.shopName = shopName;
    }

    /*public List<Integer> getListIdPaintsOwned() {
        return listIdPaintsOwned;
    }*/

    /*public void setListIdPaintsOwned(List<Integer> listIdPaintsOwned) {
        this.listIdPaintsOwned = listIdPaintsOwned;
    }*/

    public Long getShopId() {
        return shopId;
    }

    public void setShopId(Long shopId) {
        this.shopId = shopId;
    }

    public String getShopName() {
        return shopName;
    }

    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    public int getQuantityPaints() {
        return quantityPaints;
    }

    public void setQuantityPaints(int quantityPaints) {
        this.quantityPaints = quantityPaints;
    }
}
