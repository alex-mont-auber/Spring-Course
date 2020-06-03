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
    private String paintName;
    private String authorName;
    private int price;
    private Date dateEnterShop;

    public Paint(){}

    public Paint(String paintName, String authorName, int price, Date dateEnterShop)
    {
        this.paintName = paintName;
        this.authorName = authorName;
        this.price = price;
        this.dateEnterShop = dateEnterShop;
    }

    public String getPaintName() {
        return paintName;
    }

    public void setPaintName(String paintName) {
        this.paintName = paintName;
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
