package com.ITAcademy.WhiteCollar.Controllers;

import com.ITAcademy.WhiteCollar.Exceptions.ShopNotFoundException;
import com.ITAcademy.WhiteCollar.Models.Paint;
import com.ITAcademy.WhiteCollar.Models.Shop;
import com.ITAcademy.WhiteCollar.Repositories.PaintRepository;
import com.ITAcademy.WhiteCollar.Repositories.ShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ShopPaintController {

    @Autowired
    private final ShopRepository shopRepository;
    private final PaintRepository paintRepository;

    ShopPaintController(ShopRepository shopRepository, PaintRepository paintRepository)
    {
        this.shopRepository = shopRepository;
        this.paintRepository = paintRepository;
    }

    @GetMapping("/shops") // SHOW ALL SHOPS
    List<Shop> all()
    {
        return shopRepository.findAll();
    }

    @PostMapping("/shops") // CREATE SHOP
    Shop newShop(@RequestBody Shop newShop)
    {
        return shopRepository.save(newShop);
    }

    @GetMapping("/shops/{id}") // SHOW SHOP X WITH DETAILS
    Shop one(@PathVariable Long shopId)
    {
        return shopRepository.findById(shopId).orElseThrow(() -> new ShopNotFoundException(shopId));
    }

/*  @GetMapping("/shops/{id}/paints") // SHOW PAINTS BY SHOP
    Shop two(@PathVariable Long shopId)
    {
        List<Paint> all()
        {
            return paintRepository.findAll();
        }
    }*/ // STANDBY

    @PostMapping("/shops/{id}/paints") //CREATE PAINTS
    Paint newPain(@RequestBody Paint newPaint) {return paintRepository.save(newPaint);}

}
