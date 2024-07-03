<script>
    export let checked = "";
</script>

<label>
    <input type="checkbox" {checked}>
    <span></span>
</label>

<style lang="scss">
    label {
        position: relative;
        display: inline-block;
        width: 2.5em;
        height: 1.4em;

        input {
            opacity: 0;
            width: 0;
            height: 0;

            &:checked + span {
                background-color: var(--rp-pine);

                &:before {
                    transform: translateX(1em);
                    //background-color: var(--rp-muted);
                }
            }

            &:focus + span:before{
                box-shadow: 0 0 0.05em #2196F3;
            }
        }

        span {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--rp-muted);
            transition: .4s;
            border-radius: 1.4em;

            &:before {
                position: absolute;
                content: "";
                height: 1em;
                width: 1em;
                left: 0.2em;
                bottom: 0.2em;
                background-color: var(--rp-text);
                transition: .4s;
                border-radius: 50%;
            }
        }
    }
</style>
