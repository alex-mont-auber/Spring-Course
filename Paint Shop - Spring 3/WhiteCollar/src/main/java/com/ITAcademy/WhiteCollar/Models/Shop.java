package com.ITAcademy.WhiteCollar.Models;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.List;

@Data
@Entity

public class Shop {

    private @Id @GeneratedValue Long shopId;
    private String shopName;
    private int quantityPaints;
    //private List<Integer> listIdPaintsOwned;

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
