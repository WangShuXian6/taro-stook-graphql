import { useState, useEffect, useRef } from 'react'
import { createUseStore } from 'stook'

export const useStore = createUseStore(useState, useEffect, useRef)