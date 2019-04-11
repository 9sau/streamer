package com.saurabh.streamer.streamyserver.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "streams")
public class Stream {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;

	@NotBlank
	@Size(max = 100)
	private String title;

	@NotBlank
	@Size(max = 100)
	private String description;

	private String userId;

	public Stream() {

	}

	public Stream(@NotBlank @Size(max = 100) String title, @NotBlank @Size(max = 100) String description,
			String userId) {
		this.title = title;
		this.description = description;
		this.userId = userId;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		this.Id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	

}
