<template>
    <div>
      <h1>index</h1>
    </div>
  </template>
  
  <script setup>
  import { useStore } from '@/stores/myStore';
  const useStor = useStore();
  console.log(useStor.count);
  console.log(useStor.doubleCount);
  console.log(useStor.increment());  
  </script>
  