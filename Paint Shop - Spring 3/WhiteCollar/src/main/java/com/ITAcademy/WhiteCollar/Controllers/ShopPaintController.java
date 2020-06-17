package com.ITAcademy.WhiteCollar.Controllers;

import com.ITAcademy.WhiteCollar.Exceptions.PaintNotFoundException;
import com.ITAcademy.WhiteCollar.Exceptions.ShopNotFoundException;
import com.ITAcademy.WhiteCollar.Models.Shop;
import com.ITAcademy.WhiteCollar.Models.Paint;
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

    /* FOR TEST NEW CHANGES -> APPLICATION.PROPERTIES AN CHANGE FIRST LINE TO:
    *
    * UPDATE -> IF YOU WANT ONLY ADD DATA
    * CREATE -> FOR "RESET" ALL DB AND ADD NEW PARAMETERS
    * NONE -> IF YOU WANT SERVER DON'T DO ANYTHING(MYSQL NONE IS THE STANDAR)
    * CREATE-DROP -> CREATE A DB AND DROP WHEN SESSION IS FINALIZED
    *
    * */

    @GetMapping("/shops") // SHOW ALL SHOPS(WORKS)
    List<Shop> getAllShops()
    {
        return shopRepository.findAll();
    }

    @PostMapping("/shops") // CREATE SHOP(WORKS)
    Shop newShop(@RequestBody Shop newShop)
    {
        return shopRepository.save(newShop);
    }

    @GetMapping("/shops/{shopId}") // SHOW SHOP X WITH DETAILS(WORKS)
    Shop one(@PathVariable Long shopId) {
        return shopRepository.findById(shopId).orElseThrow(() -> new ShopNotFoundException(shopId));
    }

   @GetMapping("/shops/{id}/paints") // SHOW PAINTS BY SHOP(BUILDING)
       List<Paint> getAllPaints()
       {
           return paintRepository.findAll();
       }

   @PostMapping("/shops/{id}/paints") //CREATE PAINTS
        Paint newPaint(@RequestBody Paint newPaint) {return paintRepository.save(newPaint);}

    @DeleteMapping("/shops/{id}/paints") // ERASE PAINTS
        void deletePaints(@PathVariable Long id) {
        paintRepository.deleteById(id);
        }

}
