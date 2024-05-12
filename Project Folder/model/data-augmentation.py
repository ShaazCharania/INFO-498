import librosa


def augment_audio(y, sr):
    y_pitch = librosa.effects.pitch_shift(y, sr, n_steps=4)  # Pitch shift
    y_fast = librosa.effects.time_stretch(y, 1.5)  # Speed up
    return y_pitch, y_fast
