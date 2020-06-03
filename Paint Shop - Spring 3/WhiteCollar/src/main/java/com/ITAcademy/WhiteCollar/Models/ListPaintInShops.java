package com.ITAcademy.WhiteCollar.Models;

import com.ITAcademy.WhiteCollar.Models.Shop;
import com.ITAcademy.WhiteCollar.Models.Paint;
import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity




public class ListPaintInShops {

    private String paintNameList;
    private String shopNameList;
    private int idShopList;
    private int idPaintList;

    public ListPaintInShops(){}

    public ListPaintInShops(String paintNameList, String shopNameList, int idShopList, int idPaintList) {

        this.paintNameList = paintNameList;
        this.shopNameList = shopNameList;
        this.idShopList = idShopList;
        this.idPaintList = idPaintList;
    }

    public String getPaintNameList() {
        return paintNameList;
    }

    public void setPaintNameList(String paintNameList) {
        this.paintNameList = paintNameList;
    }

    public String getShopNameList() {
        return shopNameList;
    }

    public void setShopNameList(String shopNameList) {
        this.shopNameList = shopNameList;
    }

    public int getIdShopList() {
        return idShopList;
    }

    public void setIdShopList(int idShopList) {
        this.idShopList = idShopList;
    }

    public int getIdPaintList() {
        return idPaintList;
    }

    public void setIdPaintList(int idPaintList) {
        this.idPaintList = idPaintList;
    }
}
