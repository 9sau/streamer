package com.saurabh.streamer.streamyserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.saurabh.streamer.streamyserver.entity.Stream;

public interface StreamRepository extends JpaRepository<Stream, Long> {

}
