package com.devsuperior.dscatalog.dto;

import com.devsuperior.dscatalog.services.validation.UserUpdateValid;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@UserUpdateValid
@EqualsAndHashCode(callSuper = false)
public class UserUpdateDTO extends UserDTO {


}
