package com.devsuperior.dscatalog.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Category implements Serializable {

    private Long id;
    private String name;

}
