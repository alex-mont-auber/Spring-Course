package com.ITAcademy.WhiteCollar.Models;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity

public class Paint {

    /* TESTING ManyToOne */

    @Column(nullable = false)
    private String title;

    @ManyToOne
    @JoinColumn(name="shop_id")
    private Shop shop;

    /* TESTING ManyToOne*/

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
    /* TESTING START */

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Shop getShop() {
        return shop;
    }

    public void setShop(Shop shop) {
        this.shop = shop;
    }
    /* TESTING END*/

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
