'use client';

import {useBoundStore} from "@/stores/useBoundStore";

export default function useAuth() {
    const {token} = useBoundStore();
    return {token};
}