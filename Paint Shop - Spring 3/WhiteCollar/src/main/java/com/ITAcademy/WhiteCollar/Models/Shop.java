package com.ITAcademy.WhiteCollar.Models;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity

public class Shop {

    private @Id @GeneratedValue Long shopId;
    private String shopName;
    private int quantityPaints;

    public Shop(){}

    public Shop(String shopName, int quantityPaints){
        this.shopName = shopName;
        this.quantityPaints = quantityPaints;
    }

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
