import { ItemBorderStyleDirective } from './item-border-style.directive';
import { Component, Renderer2, ElementRef } from '@angular/core';
import { inject } from '@angular/core/testing';

describe('ItemBorderStyleDirective', () => {
  it('should create an instance', () => {
    inject([ElementRef, Renderer2], (elementRef: ElementRef, renderer: Renderer2) => {
      const directive = new ItemBorderStyleDirective(renderer, elementRef);

      expect(directive).toBeTruthy();
    });
  });
});
