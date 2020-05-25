package com.ITAcademy.WhiteCollar.Models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity


public class Paint {

    private @Id @GeneratedValue Long paintId;
    private String authorName;
    private int price;
    private Date dateEnterShop;

    public Paint(){}

    public Paint(String authorName, int price, Date dateEnterShop){
        this.authorName = authorName;
        this.price = price;
        this.dateEnterShop = dateEnterShop;
    }

    public Long getPaintId() {
        return paintId;
    }

    public void setPaintId(Long paintId) {
        this.paintId = paintId;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Date getDateEnterShop() {
        return dateEnterShop;
    }

    public void setDateEnterShop(Date dateEnterShop) {
        this.dateEnterShop = dateEnterShop;
    }
}
