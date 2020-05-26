package com.ITAcademy.WhiteCollar.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ITAcademy.WhiteCollar.Models.Paint;


public interface PaintRepository extends JpaRepository<Paint,Long> {
}
