package com.ITAcademy.WhiteCollar.Exceptions;

public class PaintNotFoundException extends RuntimeException
{
    public PaintNotFoundException(Long id)
    {
        super("Could not find paint: " + id);
    }
}
