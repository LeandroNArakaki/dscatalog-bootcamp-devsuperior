package com.devsuperior.dscatalog.dto;

import com.devsuperior.dscatalog.entities.Role;
import com.devsuperior.dscatalog.entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO implements Serializable {

    private Long id;

    @NotBlank(message = "Campo primeiro nome está vazio")
    private String firstName;

    private String lastName;

    @Email(message = "Por favor entrar com um email válido")
    private String email;

    Set<RoleDTO> roles = new HashSet<>();

    public UserDTO(User entity){
        this.id = entity.getId();
        this.firstName = entity.getFirstName();
        this.lastName = entity.getLastName();
        this.email = entity.getEmail();
        entity.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
    }

}
