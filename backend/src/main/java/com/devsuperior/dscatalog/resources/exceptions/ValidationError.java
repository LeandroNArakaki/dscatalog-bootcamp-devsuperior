package com.devsuperior.dscatalog.resources.exceptions;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.ArrayList;
import java.util.List;

@Data
@EqualsAndHashCode(callSuper = false)
public class ValidationError extends StandardError {

    private List<FieldMessage> errors = new ArrayList<>();

    public void addError(String fieldName, String message){
        errors.add(new FieldMessage(fieldName,message));
    }
}
