const OfficeIcon = ({
                      color = "currentColor",
                      width = "40px",
                      height = "40px",
                  }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width={width} height={height} viewBox="0 0 32 32" >
            <g>
                <g>
                    <path fill={color}
                          stroke={color}
                          d="M9.501,22.115c-1.044,0-1.894,0.467-1.894,1.039c0.001,0.012,0.003,0.021,0.003,0.033v4.879l3.751-0.33v-5.011
			                c-0.374-0.352-1.057-0.6-1.811-0.61H9.501z"/>
                    <path fill={color}
                          stroke={color}
                          d="M29.878,5.895V3.91l-0.022-0.006V3.811l-6.959-1.677l-0.008-0.001l-8.373,1.979v1.714l-1.847,0.41V7.48l0.562-0.105v11.63
			l-1.867,0.042V9.383l-5.18-0.677L0,10.061v17.157l7.13,0.84v-4.854c-0.002-0.012-0.004-0.029-0.004-0.049
			c0-0.865,1.021-1.52,2.375-1.52h0.058c1.297,0.02,2.359,0.625,2.554,1.419l0.031,0.002l0.003,0.228v5.384l1.084,0.132l8.812,1.068
			l1.576-0.217V24.97l2.462-0.146v4.528l1.676-0.202v-4.438l2.203-0.129v4.302l1.073-0.13V7.66L32,7.763V6.37L29.878,5.895z
			 M3.125,13.893l2.31-0.265v1.002l-2.31,0.226V13.893z M0.622,14.191l2.11-0.24v0.957l-2.11,0.205V14.191z M2.751,23.085
			l-2.152-0.097v-0.922l2.152,0.061V23.085z M2.751,21.429l-2.152-0.034v-0.921l2.152-0.003V21.429z M2.751,19.805l-2.135,0.027
			V18.91l2.135-0.063V19.805z M2.751,18.201L0.64,18.287v-0.922l2.112-0.121L2.751,18.201L2.751,18.201z M2.751,16.519L0.64,16.665
			v-0.922l2.112-0.182L2.751,16.519L2.751,16.519z M2.771,13.303l-2.113,0.265v-0.923l2.113-0.299V13.303z M2.771,11.752
			l-2.114,0.321v-0.922l2.113-0.356L2.771,11.752L2.771,11.752z M5.435,23.191l-2.31-0.103v-0.964l2.31,0.062V23.191z M5.435,21.457
			l-2.31-0.036v-0.963l2.31-0.003V21.457z M5.456,19.758l-2.311,0.029v-0.965l2.311-0.066V19.758z M5.456,18.08l-2.311,0.094V17.21
			l2.311-0.132V18.08z M5.456,16.318l-2.311,0.16v-0.964l2.311-0.199V16.318z M5.477,12.951l-2.313,0.29v-0.965l2.313-0.328V12.951z
			 M5.477,11.327l-2.313,0.352v-0.964l2.313-0.391V11.327z M6.518,11.894l2.057,0.154v0.949l-2.057-0.118V11.894z M6.533,13.52
			l2.034,0.095v0.949l-2.034-0.059V13.52z M6.55,15.104l1.996,0.036v0.95L6.55,16.088V15.104z M6.572,16.736l1.995-0.021v0.95
			l-1.995,0.056V16.736z M8.577,19.173l-1.994,0.11v-0.984l1.994-0.075V19.173z M8.582,11.487l-2.034-0.172v-0.986l2.034,0.209
			V11.487z M10.728,19.09l-1.826,0.102v-0.942l1.826-0.071V19.09z M10.758,17.619L8.9,17.672v-0.944l1.858-0.02V17.619z
			 M8.918,16.129v-0.943l1.825,0.032v0.912L8.918,16.129z M10.775,14.661L8.9,14.609v-0.944l1.875,0.086V14.661z M8.918,13.052
			v-0.943l1.825,0.136v0.912L8.918,13.052z M10.775,11.69L8.9,11.53v-0.943l1.875,0.191V11.69z M15.913,4.61l4.479-1.006V4.57
			l-4.479,0.949V4.61z M17.782,11.987l3.659-0.431v1.268l-3.659,0.369V11.987z M13.897,12.458l3.269-0.383v1.196L13.897,13.6V12.458
			z M17.195,23.496l-3.333-0.139v-1.142l3.333,0.082V23.496z M17.195,21.425l-3.333-0.041v-1.142l3.333-0.016V21.425z
			 M17.195,19.396l-3.305,0.051v-1.142l3.305-0.106V19.396z M17.195,17.392l-3.271,0.142V16.39l3.271-0.196V17.392z M17.195,15.286
			l-3.271,0.237V14.38l3.271-0.292V15.286z M17.227,11.265l-3.274,0.42v-1.143l3.274-0.475V11.265z M17.227,9.324l-3.274,0.509
			V8.691l3.274-0.563V9.324z M21.439,23.654l-3.658-0.149v-1.207l3.658,0.089V23.654z M21.439,21.461l-3.658-0.045v-1.207
			l3.658-0.016V21.461z M21.475,19.311l-3.662,0.059v-1.206l3.662-0.119V19.311z M21.475,17.189l-3.662,0.159v-1.208l3.662-0.221
			V17.189z M21.475,14.958l-3.662,0.268v-1.208l3.662-0.327V14.958z M21.507,10.698l-3.665,0.471V9.962l3.665-0.532V10.698z
			 M21.507,8.644l-3.665,0.569V8.005l3.665-0.63V8.644z M24.232,3.681l4.557,1.023v0.02l0.023,0.006v0.916L24.26,4.684V4.662
			l-0.027-0.006V3.681L24.232,3.681z M30.361,16.332v1.197l-3.237-0.143v-1.253L30.361,16.332z M27.154,15.342V14.09l3.183,0.284
			v1.197L27.154,15.342z M27.126,19.406v-1.254l3.185,0.105v1.197L27.126,19.406z M30.309,20.265v1.197l-3.185,0.044v-1.254
			L30.309,20.265z M22.863,9.329l3.686,0.54v1.264l-3.686-0.477V9.329z M22.891,11.522l3.646,0.431v1.264l-3.646-0.367V11.522z
			 M22.921,13.657l3.576,0.322v1.264l-3.576-0.26V13.657z M22.962,15.86l3.573,0.219v1.264l-3.573-0.157V15.86z M26.508,23.538
			l-3.458,0.143v-1.323l3.458-0.082V23.538z M26.508,21.494l-3.531,0.047v-1.325l3.531,0.015V21.494z M26.553,19.349l-3.57-0.059
			v-1.325l3.57,0.12V19.349z M26.562,9.126l-3.646-0.572V7.228l3.646,0.636V9.126z M30.371,23.415l-3.247,0.137v-1.254l3.247-0.079
			V23.415z M30.393,13.648l-3.269-0.326v-1.253l3.269,0.383V13.648z M27.154,11.258v-1.252l3.183,0.464v1.197L27.154,11.258z
			 M30.393,9.746l-3.269-0.512V7.982l3.269,0.569V9.746z"/>
                </g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
        </svg>


    );
};

export default OfficeIcon;
