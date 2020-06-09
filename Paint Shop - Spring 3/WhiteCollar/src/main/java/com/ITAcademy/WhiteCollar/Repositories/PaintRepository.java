package com.ITAcademy.WhiteCollar.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ITAcademy.WhiteCollar.Models.Paint;
import org.springframework.data.repository.CrudRepository;

public interface PaintRepository extends JpaRepository<Paint, Long> { }

//public interface PaintRepository extends CrudRepository<Paint, Long> { }
