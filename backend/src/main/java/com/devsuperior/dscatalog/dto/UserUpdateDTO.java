package com.devsuperior.dscatalog.dto;

import com.devsuperior.dscatalog.services.validation.UserUpdateValid;
import lombok.Data;

@Data
@UserUpdateValid
public class UserUpdateDTO extends UserDTO {


}
