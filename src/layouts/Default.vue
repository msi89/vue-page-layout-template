<template>
    <div>
        <Navbar/>
        <main class="main">
            <slot/>
        </main>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
    components: {Navbar}
}
</script>
